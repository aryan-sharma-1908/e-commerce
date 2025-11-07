import React, { useState } from "react";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ProductSlider from '../../components/ProductSlider.jsx'
import ProductDetailsInfo from "../../components/ProductDetails/index.jsx";
const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [value, setValue] = useState(2);
  return (
    <>
      <div className="py-3">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              to="/"
              className="link"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              className="link"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              className="link"
            >
              Iphone-13
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-3">
        <div className="container flex gap-8">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>
          <ProductDetailsInfo/>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-2 pl-3">
            <span
              className={`link text-primary text-[17px] cursor-pointer font-[500] p-3 rounded-md shadow-sm shadow-black ${
                activeTab === 0 && "!shadow-primary"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-primary text-[17px] cursor-pointer font-[500] p-3 rounded-md shadow-sm shadow-black ${
                activeTab === 1 && "!shadow-primary"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>
            <span
              className={`link text-primary text-[17px] cursor-pointer font-[500] p-3 rounded-md shadow-sm shadow-black ${
                activeTab === 2 && "!shadow-primary"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Reviews
            </span>
          </div>

          <div className="shadow-md w-full mt-8 rounded-md">
            {activeTab === 0 && (
              <div className="description px-15">
                <h3 className="text-[16px] font-[500] pb-2 pt-4">General</h3>
                <table className="table-fixed py-4  w-full">
                  <tbody>
                    <tr>
                      <td className="p-1.5 text-[#878787]">In The Box</td>
                      <td className="p-1.5">
                        USB-C to Lightning Cable, Documentation
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1.5 text-[#878787]">Model Number</td>
                      <td className="p-1.5">MLQ73HN/A</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 text-[#878787]">Model Name</td>
                      <td className="p-1.5">iPhone 13</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 text-[#878787]">Color</td>
                      <td className="p-1.5">Starlight</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 text-[#878787]">Browse Type</td>
                      <td className="p-1.5">Smartphones</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 text-[#878787]">SIM Type</td>
                      <td className="p-1.5">Dual Sim</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 text-[#878787]">Hybrid Sim Slot</td>
                      <td className="p-1.5">No</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 text-[#878787]">Touchscreen</td>
                      <td className="p-1.5">Yes</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 text-[#878787]">OTG Compatible</td>
                      <td className="p-1.5">No</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 text-[#878787]">Quick Charging</td>
                      <td className="p-1.5">Yes</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 text-[#878787]">
                        Sound Enhancements
                      </td>
                      <td className="p-1.5">
                        Dolby Digital (AC‑3), Dolby Digital Plus (E‑AC‑3), Dolby
                        Atmos and Audible (formats 2, 3, 4, Audible Enhanced
                        Audio, AAX and AAX+), Spatial Audio Playback
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="text-[16px] font-[500] pb-2">Info</h3>
                <p className="pb-2">
                  iPhone 13. boasts an advanced dual-camera system that allows
                  you to click mesmerising pictures with immaculate clarity.
                  Furthermore, the lightning-fast A15 Bionic chip allows for
                  seamless multitasking, elevating your performance to a new
                  dimension. A big leap in battery life, a durable design, and a
                  bright Super Retina XDR display facilitate boosting your user
                  experience.
                </p>

                <h3 className="text-[16px] font-[500] pb-2">Highlights</h3>
                <ul className="pl-5 list-disc pb-4">
                  <li>128 GB ROM</li>
                  <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                  <li>12MP + 12MP | 12MP Front Camera</li>
                  <li>A15 Bionic Chip Processor</li>
                  <li>Battery life: Up to 19 hours talk time</li>
                </ul>
              </div>
            )}

            {activeTab === 1 && (
              <div className="productDetails px-15">
                <div className="flex justify-around gap-2 py-4">
                  <div className="text order-1">
                    <h3 className="text-[16px] font-[500] pt-4 pb-4">
                      Display and Design
                    </h3>
                    <p>
                      A more vivid OLED display that’s both easier to see in
                      full sunlight and power efficient. With a durable design
                      that’s water and dust-resistant.
                    </p>
                  </div>
                  <div className="img order-2">
                    <img
                      src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f911cab85917488bad55094596200ceb_18359bfe18b_image.png?q=90"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex justify-around gap-2 pb-4">
                  <div className="text order-2">
                    <h3 className="text-[16px] font-[500] pt-4 pb-2">
                      Cinematic Mode
                    </h3>
                    <p>
                      Automatically create beautiful depth effects and focus
                      transitions in your videos. Bring a new level of
                      storytelling to the scenes you shoot.
                    </p>
                  </div>
                  <div className="img order-1">
                    <img
                      src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/4dc94e380a844cfaa8976dc502fbfd1a_18359c0013a_image.png?q=90"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex justify-around gap-2 pb-4">
                  <div className="text order-1">
                    <h3 className="text-[16px] font-[500] pt-4 pb-4">
                      Dual-camera System
                    </h3>
                    <p>
                      A huge upgrade for better photos and videos. More light is
                      captured with the Wide camera. Sensor-shift optical image
                      stabilisation. And more detail in dark areas of your
                      photos with the Ultra Wide camera.
                    </p>
                  </div>
                  <div className="img order-2">
                    <img
                      src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/7b3bf64047794add8f4d55e079ba1cce_18359c02a77_image.png?q=90"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex justify-around gap-2 pb-4">
                  <div className="text order-2">
                    <h3 className="text-[16px] font-[500] pt-4 pb-4">
                      Massive Battery
                    </h3>
                    <p>
                      A big boost in battery life you’ll notice every day. That
                      means more time to watch, game, and do more of what you
                      love with up to 19 hours of video playback on a single
                      charge.
                    </p>
                  </div>
                  <div className="img order-1">
                    <img
                      src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/3b21f240f0d74efb9e32566c693c7f95_18359c04946_image.png?q=90"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex justify-around gap-2 pb-4">
                  <div className="text order-1">
                    <h3 className="text-[16px] font-[500] pt-4 pb-4">
                      A15 Bionic
                    </h3>
                    <p>
                      A15 Bionic powers graphics-intensive games and new camera
                      features like Cinematic mode and Photographic Styles. And
                      it’s more efficient, helping deliver longer battery life.
                    </p>
                  </div>
                  <div className="img order-2">
                    <img
                      src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/fd06e35acb7943f1b82397a594efd7f5_18359c06f48_image.png?q=90"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="reviews px-15">
                <h3 className="text-[18px] font-[600] pt-4 pb-2">
                  Customer QnA
                </h3>

                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden pr-5">
                  <div className="review w-full flex items-center justify-between border-b py-5 border-b-[rgba(0,0,0,0.1)]">
                    <div className="info  flex items-center gap-2">
                      <div className="img w-[60px] h-[60px] overflow-hidden rounded-full">
                        <img
                          src="https://imgs.search.brave.com/jzQ0pQ-yut3QtRqHHKeZAnQ-gocQIfd9dHr23N4F4Lk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uc3RhYmxlZGlm/ZnVzaW9ud2ViLmNv/bS8yMDI0LzEwLzkv/MDRmOWMzZWQtOGI4/Ny00ODRkLWExZDQt/ZDZhYTE3YjkwMzc0/LmpwZw"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[70%] pl-1 ">
                        <h4 className="text-[16px] leading-5 font-[500]">
                          Aryan Sharma
                        </h4>
                        <h5 className="text-[13px]">2025-19-08</h5>
                        <p className="text-[rgba(0,0,0,0.5)]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>
                    <Stack spacing={1} className="my-1">
                      <Rating
                        name="size-medium"
                        defaultValue={2}
                        size="medium"
                        readOnly
                      />
                    </Stack>
                  </div>
                  <div className="review w-full flex items-center justify-between border-b py-5 border-b-[rgba(0,0,0,0.1)]">
                    <div className="info  flex items-center gap-2">
                      <div className="img w-[60px] h-[60px] overflow-hidden rounded-full">
                        <img
                          src="https://imgs.search.brave.com/jzQ0pQ-yut3QtRqHHKeZAnQ-gocQIfd9dHr23N4F4Lk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uc3RhYmxlZGlm/ZnVzaW9ud2ViLmNv/bS8yMDI0LzEwLzkv/MDRmOWMzZWQtOGI4/Ny00ODRkLWExZDQt/ZDZhYTE3YjkwMzc0/LmpwZw"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[70%] pl-1 ">
                        <h4 className="text-[16px] leading-5 font-[500]">
                          Aryan Sharma
                        </h4>
                        <h5 className="text-[13px]">2025-19-08</h5>
                        <p className="text-[rgba(0,0,0,0.5)]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>
                    <Stack spacing={1} className="my-1">
                      <Rating
                        name="size-medium"
                        defaultValue={2}
                        size="medium"
                        readOnly
                      />
                    </Stack>
                  </div>
                  <div className="review w-full flex items-center justify-between border-b py-5 border-b-[rgba(0,0,0,0.1)]">
                    <div className="info  flex items-center gap-2">
                      <div className="img w-[60px] h-[60px] overflow-hidden rounded-full">
                        <img
                          src="https://imgs.search.brave.com/jzQ0pQ-yut3QtRqHHKeZAnQ-gocQIfd9dHr23N4F4Lk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uc3RhYmxlZGlm/ZnVzaW9ud2ViLmNv/bS8yMDI0LzEwLzkv/MDRmOWMzZWQtOGI4/Ny00ODRkLWExZDQt/ZDZhYTE3YjkwMzc0/LmpwZw"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[70%] pl-1 ">
                        <h4 className="text-[16px] leading-5 font-[500]">
                          Aryan Sharma
                        </h4>
                        <h5 className="text-[13px]">2025-19-08</h5>
                        <p className="text-[rgba(0,0,0,0.5)]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>
                    <Stack spacing={1} className="my-1">
                      <Rating
                        name="size-medium"
                        defaultValue={2}
                        size="medium"
                        readOnly
                      />
                    </Stack>
                  </div>
                  <div className="review w-full flex items-center justify-between border-b py-5 border-b-[rgba(0,0,0,0.1)]">
                    <div className="info  flex items-center gap-2">
                      <div className="img w-[60px] h-[60px] overflow-hidden rounded-full">
                        <img
                          src="https://imgs.search.brave.com/jzQ0pQ-yut3QtRqHHKeZAnQ-gocQIfd9dHr23N4F4Lk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uc3RhYmxlZGlm/ZnVzaW9ud2ViLmNv/bS8yMDI0LzEwLzkv/MDRmOWMzZWQtOGI4/Ny00ODRkLWExZDQt/ZDZhYTE3YjkwMzc0/LmpwZw"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[70%] pl-1 ">
                        <h4 className="text-[16px] leading-5 font-[500]">
                          Aryan Sharma
                        </h4>
                        <h5 className="text-[13px]">2025-19-08</h5>
                        <p className="text-[rgba(0,0,0,0.5)]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>
                    <Stack spacing={1} className="my-1">
                      <Rating
                        name="size-medium"
                        defaultValue={2}
                        size="medium"
                        readOnly
                      />
                    </Stack>
                  </div>
                  <div className="review w-full flex items-center justify-between border-b py-5 border-b-[rgba(0,0,0,0.1)]">
                    <div className="info  flex items-center gap-2">
                      <div className="img w-[60px] h-[60px] overflow-hidden rounded-full">
                        <img
                          src="https://imgs.search.brave.com/jzQ0pQ-yut3QtRqHHKeZAnQ-gocQIfd9dHr23N4F4Lk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uc3RhYmxlZGlm/ZnVzaW9ud2ViLmNv/bS8yMDI0LzEwLzkv/MDRmOWMzZWQtOGI4/Ny00ODRkLWExZDQt/ZDZhYTE3YjkwMzc0/LmpwZw"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[70%] pl-1 ">
                        <h4 className="text-[16px] leading-5 font-[500]">
                          Aryan Sharma
                        </h4>
                        <h5 className="text-[13px]">2025-19-08</h5>
                        <p className="text-[rgba(0,0,0,0.5)]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>
                    <Stack spacing={1} className="my-1">
                      <Rating
                        name="size-medium"
                        defaultValue={2}
                        size="medium"
                        readOnly
                      />
                    </Stack>
                  </div>
                  <div className="review w-full flex items-center justify-between border-b py-5 border-b-[rgba(0,0,0,0.1)]">
                    <div className="info  flex items-center gap-2">
                      <div className="img w-[60px] h-[60px] overflow-hidden rounded-full">
                        <img
                          src="https://imgs.search.brave.com/jzQ0pQ-yut3QtRqHHKeZAnQ-gocQIfd9dHr23N4F4Lk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uc3RhYmxlZGlm/ZnVzaW9ud2ViLmNv/bS8yMDI0LzEwLzkv/MDRmOWMzZWQtOGI4/Ny00ODRkLWExZDQt/ZDZhYTE3YjkwMzc0/LmpwZw"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[70%] pl-1 ">
                        <h4 className="text-[16px] leading-5 font-[500]">
                          Aryan Sharma
                        </h4>
                        <h5 className="text-[13px]">2025-19-08</h5>
                        <p className="text-[rgba(0,0,0,0.5)]">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>
                    <Stack spacing={1} className="my-1">
                      <Rating
                        name="size-medium"
                        defaultValue={2}
                        size="medium"
                        readOnly
                      />
                    </Stack>
                  </div>
                </div>

                <br />

                <div className="reviewForm bg-[#fafafa] p-4 rounded-md w-full">
                  <h2 className="text-[18px] font-semibold">Add a review</h2>
                  <form className="mt-5">
                    <TextField
                      id="outlined-textarea"
                      label="write a review"
                      placeholder="Placeholder"
                      multiline
                      rows={5}
                      className="w-full bg-white"
                    />
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      className="my-3"
                    />
                    <div className="submitButton flex items-center">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="container pt-10">
          <h2 className="text-2xl font-medium">Related Products</h2>
          <ProductSlider items={5} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
