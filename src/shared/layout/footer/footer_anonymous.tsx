import React from "react";
import "./footer_anonymous.scss";

function FooterAnonymous() {
  return (
    <div className="footer">
      <div className="bg-black px-[10%] py-[5%]">
        <div className="text-white flex justify-between gap-6 text-left">
          <div>
            <h2>Thông tin liên hệ</h2>
            <p>
              VP Hà Nội
              <span>: Xuân Phương - Nam Từ Liêm - Hà Nội</span>
            </p>
            <p>
              Trụ sở chính
              <span>: Yên Sơn - Tuyên Quang</span>
            </p>
            <p>
              Hotline
              <span>: 0358152382</span>
            </p>
            <p>
              Email
              <span>: hungsilvertq@gmail.com</span>
            </p>
            <p>
              <a href="#" className="">
                <img
                  className="w-[120px]"
                  src="https://savani.vn/upload_images/images/2023/02/15/bct.png"
                  alt=""
                />
              </a>
            </p>
          </div>
          <div>
            <h2>
              <a href="#">Giới Thiệu</a>
            </h2>
            <ul>
              <li>
                <a href="#">Giới thiệu</a>
              </li>
              <li>
                <a href="#">Nhận diện</a>
              </li>
              <li>
                <a href="#">Giá trị cốt lõi</a>
              </li>
              <li>
                <a href="#">Liên hệ</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>
              <a href="#">Dịch vụ khách hàng</a>
            </h2>
            <ul>
              <li>
                <a href="#">Chính sách khách hàng thân thiết</a>
              </li>
              <li>
                <a href="#">Chính sách kiểm hàng</a>
              </li>
              <li>
                <a href="#">Chính sách đổi hàng</a>
              </li>
              <li>
                <a href="#">Chính sách bảo hành</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="#">Chính sách vận chuyển và thanh toán</a>
              </li>
              <li>
                <a href="#">Hướng dẫn chọn size</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Đăng ký nhận ưu đãi từ Savani</h2>
            <p>
              Nhận thông tin sản phẩm mới và các chương trình khuyến mại của
              Savani
            </p>
            <input type="text" placeholder="Nhập email của bạn" />
            <h2>Phương thức thanh toán</h2>
            <p className="">
              <a href="#" className="">
                <img
                  className=""
                  src="https://savani.vn/images/zzz.svg"
                  alt="logo"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <h2>CÔNG TY TNHH THỜI TRANG QUỐC TẾ SAVANI</h2>
          <small>
            Đăng ký KD/ Mã số thuế: 2802886403 (Cấp ngày 23/10/2020)
          </small>
        </div>
        <div>Hưng silver </div>
      </div>
    </div>
  );
}

export default FooterAnonymous;
