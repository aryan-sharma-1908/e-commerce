import React, { useState } from "react";
import AccountSidebar from "../../components/AccountSidebar";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import Badge from "../../components/Badge";

const MyOrders = () => {
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);
    } else {
      setIsOpenOrderedProduct(index);
    }
  };

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>
        <div className="col2 w-[80%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="pt-2 pb-2 px-5 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Orders</h2>
              <p className="mt-0 mb-3">
                There are <span className="font-bold text-primary">2 </span>
                Orders
              </p>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5 mx-5 orderTable">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs !text-black uppercase bg-gray-50 dark:bg-[#E8E8E8] dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                      &nbsp;
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                      Order id
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                      Payment id
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                      Pincode
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                      Total Amount
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                      User id
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                      Order status
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-center">
                      <Button
                        className="!w-[40px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1] !text-black"
                        onClick={() => isShowOrderedProduct(0)}
                      >
                        <FaAngleDown 
                          className={`text-[16px] transition-transform duration-200 ${
                            isOpenOrderedProduct === 0 ? 'rotate-180' : ''
                          }`} 
                        />
                      </Button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      #ORD12345
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      #PAY98765
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      John Doe
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      +91 9876543210
                    </td>
                    <td className="px-6 py-4 text-center max-w-[200px]">
                      <div className="truncate">123 Street, City</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      110001
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      ₹2,499
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      johndoe@email.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      USER101
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Badge status={"Pending"} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      2025-08-31
                    </td>
                  </tr>
                  {isOpenOrderedProduct === 0 && (
                    <tr>
                      <td colSpan={12} className="px-0 py-0">
                        <div className="bg-gray-50 p-4">
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Order Details</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                              <thead className="text-xs !text-black uppercase bg-gray-100">
                                <tr>
                                  <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                                    Product id
                                  </th>
                                  <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                                    Product Title
                                  </th>
                                  <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                                    Image
                                  </th>
                                  <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                                    Quantity
                                  </th>
                                  <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                                    Price
                                  </th>
                                  <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                                    Sub Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b bg-white">
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    #PROD101
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    Wireless Headphones
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    <div className="flex items-center justify-center">
                                      <img
                                        src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                                        alt="product"
                                        className="w-[40px] h-[40px] object-cover rounded"
                                      />
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    2
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    ₹1,200
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    ₹2,400
                                  </td>
                                </tr>
                                <tr className="border-b bg-white">
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    #PROD101
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    Wireless Headphones
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    <div className="flex items-center justify-center">
                                      <img
                                        src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                                        alt="product"
                                        className="w-[40px] h-[40px] object-cover rounded"
                                      />
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    2
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    ₹1,200
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    ₹2,400
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                  <tr className="border-b">
                    <td className="px-6 py-4 text-center">
                      <Button
                        className="!w-[40px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1] !text-black"
                        onClick={() => isShowOrderedProduct(1)}
                      >
                        <FaAngleDown 
                          className={`text-[16px] transition-transform duration-200 ${
                            isOpenOrderedProduct === 1 ? 'rotate-180' : ''
                          }`} 
                        />
                      </Button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      #ORD12345
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      #PAY98765
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      John Doe
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      +91 9876543210
                    </td>
                    <td className="px-6 py-4 text-center max-w-[200px]">
                      <div className="truncate">123 Street, City</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      110001
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      ₹2,499
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      johndoe@email.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      USER101
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Badge status={"Pending"} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      2025-08-31
                    </td>
                  </tr>
                  {isOpenOrderedProduct === 1 && (
                    <tr>
                      <td colSpan={12} className="px-0 py-0">
                        <div className="bg-gray-50 p-4">
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">Order Details</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                              <thead className="text-xs !text-black uppercase bg-gray-100">
                                <tr>
                                  <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                                    Product id
                                  </th>
                                  <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                                    Product Title
                                  </th>
                                  <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                                    Image
                                  </th>
                                  <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                                    Quantity
                                  </th>
                                  <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                                    Price
                                  </th>
                                  <th scope="col" className="px-6 py-3 whitespace-nowrap text-center">
                                    Sub Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b bg-white">
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    #PROD101
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    Wireless Headphones
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    <div className="flex items-center justify-center">
                                      <img
                                        src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                                        alt="product"
                                        className="w-[40px] h-[40px] object-cover rounded"
                                      />
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    2
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    ₹1,200
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    ₹2,400
                                  </td>
                                </tr>
                                <tr className="border-b bg-white">
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    #PROD101
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    Wireless Headphones
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    <div className="flex items-center justify-center">
                                      <img
                                        src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(420,420)"
                                        alt="product"
                                        className="w-[40px] h-[40px] object-cover rounded"
                                      />
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    2
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    ₹1,200
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    ₹2,400
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrders;