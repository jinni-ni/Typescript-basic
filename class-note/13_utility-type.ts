interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 정보를 받아오기 위한 함수
function fetchProducts(): Promise<Product[]>{
    //...
}

interface ProductDetail{
    id: number;
    name: string;
    price: number;
}

// 2.특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: ShoppingItem){

}

type ShoppingItem2 = Omit<Product, 'brand' | 'stock'>
function displayProductDetail2(shoppingItem: ShoppingItem2){

}

interface UpdateProduct{
    id?: number;
    name?: string;
    price?: number;
    brand?: string;
    stock?: number;
}

// 3. 특정 상품정보를 update 하는 함수
function updateProductItem(productItem: UpdateProduct) {

}
function updateProductItem2(productItem: Partial<Product>) {

}

interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

// # 1
type UserProfileUpdate = {
    username?: UserProfile['username'];
    email?: UserProfile['email'];
    profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

// # 2 축약형 Mapped type
// UserProfile에 있는 Key에 접근해서 왼쪽에 있는 값으로 매겨 주겠다
// [p in type] : 반복문
type UserProfileUpdate2 = {
    [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
}

type test = keyof UserProfile;

type UserProfileUpdate3 = {
    [p in keyof UserProfile]?: UserProfile[p];
}

type subset<T> = {
    [p in keyof T]?: T[p];
}


