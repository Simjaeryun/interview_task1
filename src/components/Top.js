
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';

export function Top() {
    const path = process.env.PUBLIC_URL;
    return (
        <section className="top">
            <div className="inner">

                <Swiper
                    className="top_banner"
                    scrollbar={
                        {
                            el: '.swiper-scrollbar',
                            draggable: true,
                            hide: false
                        }
                    }
                    modules={[Scrollbar]}
                >
                    <SwiperSlide className="top_banner_content">
                        <img src={`${path}/img/slider_01.jpg`} alt="건물사진" />
                    </SwiperSlide>
                    <SwiperSlide className="top_banner_content">
                        <img src={`${path}/img/slider_02.jpg`} alt="건물사진" />
                    </SwiperSlide>
                    <SwiperSlide className="top_banner_content">
                        <img src={`${path}/img/slider_03.jpg`} alt="건물사진" />
                    </SwiperSlide>
                    <div className="top_banner_content_txt">
                        <h1>
                            안정적 가치창출과 만족을,<br />
                            기업 구성원의 꿈과<br />
                            성취를 함께하는 기업<br />
                        </h1>
                        <p>
                            재화와 서비스의 공급을 혁신하여 산업을 선도합니다.
                        </p>
                    </div>
                </Swiper>
                <div className="swiper-scrollbar"></div>
                <div className="top_line"></div>
            </div>

        </section >
    )
}