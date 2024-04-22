<template>
  <div style="padding-top: 100px; min-height: 100vh">
    <div class="row">
      <div class="col-2" style="padding-left: 2em">
        <ul class="list-group">
          <li :class="classTab(item.key)" v-for="item in tabs" :key="item.key" @click="tab = item.key">
            {{ item.name }}
          </li>
        </ul>
      </div>

      <div class="col-10">
        <!-- Quản lý sản phẩm -->
        <div v-if="tab === 'product'">
          <div class="row">
            <div class="col-8">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Ảnh</th>
                    <th scope="col">Thao tác</th>
                  </tr>
                </thead>
                <tbody v-for="prd in products" :key="prd._id">
                  <tr>
                    <th scope="row">{{ prd._id }}</th>
                    <td>{{ prd.name }}</td>
                    <td>{{ prd.price }}</td>
                    <td>
                      <img :src="prd.img_url" alt="" style="width: 50px; height: 50px" />
                    </td>
                    <td>
                      <div class="btn btn-success mr-2" @click="onUpdateProduct(prd)">Cập nhật</div>
                      <div class="btn btn-danger" @click="onDeleteProduct(prd._id)">Xóa</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-4">
              <form>
                <h4 class="text-uppercase">Thêm mới sản phẩm</h4>
                <div class="mb-3">
                  <label class="form-label">Tên sản phẩm</label>
                  <input class="form-control" v-model="product.name" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Giá</label>
                  <input type="number" class="form-control" v-model="product.price" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Mô tả sản phẩm</label>
                  <input class="form-control" v-model="product.description" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Ảnh sản phẩm</label>
                  <input class="form-control" v-model="product.img_url" />
                </div>

                <button class="btn btn-primary" @click="onCreateProduct()">Lưu</button>
              </form>
            </div>
          </div>
        </div>

        <!-- Quản lý user -->
        <div v-else>
          <div class="row">
            <div class="col-8">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Tuổi</th>
                    <th scope="col">Chức vụ</th>
                    <th scope="col">#</th>
                  </tr>
                </thead>
                <tbody v-for="user in users" :key="user._id">
                  <tr>
                    <th scope="row">{{ user._id }}</th>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                      {{ user.address }}
                    </td>
                    <td>
                      {{ user.age }}
                    </td>
                    <td>
                      <span :class="[user.role === 'customer' ? 'bg-primary' : 'bg-success', 'badge']">
                        {{ user.role }}</span
                      >
                    </td>
                    <td>
                      <div v-if="user.role === 'customer'" class="btn btn-success mr-2" @click="onUpdateUser(user._id)">
                        Tăng Admin
                      </div>
                      <div class="btn btn-danger" @click="onDeleteUser(user._id)">Xóa</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal_ shadow" v-if="isUpdate">
      <h3>Cập nhật sản phẩm</h3>
      <div class="modal_body">
        <div class="mb-3">
          <label class="form-label">Tên sản phẩm</label>
          <input class="form-control" v-model="productUpdate.name" />
        </div>

        <div class="mb-3">
          <label class="form-label">Giá</label>
          <input type="number" class="form-control" v-model="productUpdate.price" />
        </div>

        <div class="mb-3">
          <label class="form-label">Mô tả sản phẩm</label>
          <input class="form-control" v-model="productUpdate.description" />
        </div>

        <div class="mb-3">
          <label class="form-label">Ảnh sản phẩm</label>
          <input class="form-control" v-model="productUpdate.img_url" />
        </div>
      </div>
      <div class="d-flex mt-3" style="justify-content: space-evenly">
        <div class="btn btn-primary" @click="handleUpdate()">Save</div>
        <div class="btn btn-secondary" @click="isUpdate = false">Cancel</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, reactive, ref } from "vue";
import {
  getProduct,
  deleteUser,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllUser,
  updateRoleUser,
} from "@/services/getAPI";
import { useToast } from "vue-toast-notification";
import { authStore } from "../stores/authStore.";

export default {
  setup() {
    const toast = useToast();

    const tab = ref("product");

    const tabs = [
      { name: "Quản lý sản phẩm", key: "product" },
      {
        name: "Quản lý tài khoản",
        key: "user",
      },
    ];
    const isUpdate = ref(false);
    const products = ref([]) as any;
    const users = ref([]) as any;

    const product = reactive({
      name: "",
      price: 0,
      description: "",
      img_url: "",
    });
    const productUpdate = ref({
      _id: "",
      name: "",
      price: 0,
      description: "",
      img_url: "",
    });

    const classTab = (key) => {
      return tab.value === key ? "list-group-item active" : "list-group-item";
    };

    const fetchProduct = () => {
      getProduct().then(({ data }) => {
        products.value = data;
      });
    };

    const fetchUser = () => {
      getAllUser().then(({ data }) => {
        users.value = data;
      });
    };

    fetchProduct();
    fetchUser();

    const onUpdateUser = (userId) => {
      const adminId = authStore().auth?._id || "";
      updateRoleUser(adminId, userId)
        .then(() => {
          toast.success("Cập nhật phân quyền thành công");
          fetchUser();
        })
        .catch(() => {
          toast.error("Bạn không có quyền cho thao tác này");
        });
    };
    const onDeleteUser = (userId) => {
      deleteUser(userId).then(() => {
        toast.success("Xóa thành công");
        fetchUser();
      });
    };

    const onCreateProduct = () => {
      createProduct(product).then(() => {
        toast.success("Tạo sản phẩm thành công");
      });
    };

    const onUpdateProduct = (product) => {
      isUpdate.value = true;
      productUpdate.value = product;
    };

    const handleUpdate = () => {
      updateProduct(productUpdate.value._id, productUpdate.value).then(() => {
        toast.success("Cập nhật sản phẩm thành công");
        fetchProduct();
      });
    };

    const onDeleteProduct = (id) => {
      deleteProduct(id).then(() => {
        toast.success("Xóa sản phẩm thành công");
        fetchProduct();
      });
    };

    return {
      tab,
      tabs,
      classTab,
      product,
      products,
      onCreateProduct,
      onUpdateProduct,
      onDeleteProduct,
      productUpdate,
      isUpdate,
      handleUpdate,
      onUpdateUser,
      users,
      onDeleteUser,
    };
  },
};
</script>

<style scoped>
.modal_ {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 2em;
  min-width: 600px;
}
</style>
