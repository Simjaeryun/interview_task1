export function Bottom() {
    const path = process.env.PUBLIC_URL;
    return (
        <section className="bottom">
            <div className="inner">
                <h1>BUSINESS</h1>
                <h2>사업영역</h2>
                <div className="bottom_content">
                    <div className="bottom_content_card">
                        <div className="bottom_content_card_img">
                            <img src={`${path}/img/card_01.jpg`} alt="건물사진" />
                        </div>
                        <div className="botton_content_card_txt">
                            <h1>케미칼 사업</h1>
                            <div className="bottom_content_card_txt_line"></div>
                            <p>
                                이른 아침 작은 새들 노랫소리 들려오면
                                언제나 그랬듯 아쉽게 잠을 깬다
                            </p>
                        </div>
                    </div>
                    <div className="bottom_content_card">
                        <div className="bottom_content_card_img">
                            <img src={`${path}/img/card_02.jpg`} alt="건물사진" />
                        </div>
                        <div className="botton_content_card_txt">
                            <h1>알류미늄 산업</h1>
                            <div className="bottom_content_card_txt_line"></div>
                            <p>
                                창문 하나 햇살 가득 눈부시게 비쳐오고
                                서늘한 냉기에 재채기할까 말까
                            </p>
                        </div>
                    </div>
                    <div className="bottom_content_card">
                        <div className="bottom_content_card_img">
                            <img src={`${path}/img/card_03.jpg`} alt="밭 사진" />
                        </div>
                        <div className="botton_content_card_txt">
                            <h1>비료(FERTILIZER)</h1>
                            <div className="bottom_content_card_txt_line"></div>
                            <p>
                                눈 비비며 빼꼼히 창밖을 내다보니
                                삼삼오오 아이들은 재잘대며 학교 가고
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}