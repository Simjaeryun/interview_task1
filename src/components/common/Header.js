import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export function Header() {
    const [isOn, setIsOn] = useState(false);
    const path = process.env.PUBLIC_URL;
    return (
        <header className="header">
            <div className="inner">
                <div className="header_logo">
                    <img src={`${path}/img/logo.png`} alt="" />
                </div>
                <ul
                    className={isOn ? "header_nav on" : "header_nav"}
                    onMouseLeave={() => {
                        setIsOn(false)
                    }}
                >
                    <li>
                        <a
                            href="#!"
                            onMouseEnter={() => {
                                setIsOn(true)
                            }}
                        >ABOUT</a>
                        <ul>
                            <li>회사소개</li>
                            <li>회사연혁</li>
                        </ul>
                    </li>
                    <li>
                        <a
                            href="#!"
                            onMouseEnter={() => {
                                setIsOn(true)
                            }}
                        >VISION</a>
                        <ul>
                            <li>비전</li>
                            <li>핵심가치</li>
                            <li>인재상</li>
                        </ul>
                    </li>
                    <li>
                        <a
                            href="#!"
                            onMouseEnter={() => {
                                setIsOn(true)
                            }}
                        >BUSINESS</a>
                        <ul>
                            <li>사업영역</li>
                            <li>사업전략</li>
                            <li>사업장</li>
                        </ul>
                    </li>
                    <li>
                        <a
                            href="#!"
                            onMouseEnter={() => {
                                setIsOn(true)
                            }}
                        >CONTECT</a>
                        <ul>
                            <li>CONTACT</li>
                        </ul>
                    </li>
                </ul>
                <div className="menu_btn">
                    <button>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            <div className={isOn ? "header_back on" : "header_back"}></div>
        </header >
    )
}