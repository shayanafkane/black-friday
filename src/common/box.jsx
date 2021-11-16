import React from 'react';
import Form from './form';
import Product from './Product-box';


const Box = () => {
    return (
        <main>
            <div className="container-blend">
                <img src="assets/img/1.gif" style={{ mixBlendMode: "screen" }} className="img-custom" alt="" />
                {/* <h1 className="neonText">
                    شگفت
                
                </h1> */}
            </div>
          
            <div className="header-box container">


                <div className="header-item header-1">
                    <div class="tick" data-did-init="handleTickInit">
                        <div data-repeat="true" data-layout="horizontal center fit"
                            data-transform="preset(d, h, m, s) -> delay">

                            <div class="tick-group">

                                <div data-key="value" data-repeat="true"
                                    data-transform="pad(00) -> split -> delay">

                                    <span data-view="flip"></span>

                                </div>

                                <span data-key="label" data-view="text" class="tick-label"></span>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
            <div class="mouse_scroll">

<div class="mouse">
    <div class="wheel"></div>
</div>
<div className="mr-custom" style={{ marginRight: "4px;" }}>
    <span class="m_scroll_arrows unu"></span>
    <span class="m_scroll_arrows doi"></span>
    <span class="m_scroll_arrows trei"></span>
</div>
</div>
            <Form />
            <h2 className="title-product-box">محصولات شگفت جمعه</h2>
            <div className="black-friday-bg">
                <Product img="assets/img/cat-8.png" offer="200/000 تومان تخفیف" img2="assets/img/cat-1.png" offer2="1/000/000 تومان تخفیف" />
                <Product img="assets/img/cat-2.png" offer="400/000 تومان تخفیف" img2="assets/img/cat-3.png" offer2="150/000 تومان تخفیف" />
                <Product img="assets/img/cat-4.png" offer="200/000 تومان تخفیف" img2="assets/img/cat-5.png" offer2="300/000 تومان تخفیف" />
                <Product img="assets/img/cat-9.png" offer="1/200/000 تومان تخفیف" img2="assets/img/cat-10.png" offer2="1/000/000 تومان تخفیف" />
                <Product img="assets/img/cat-6.png" offer="10% تخفیف" img2="assets/img/cat-7.png" offer2="20% تخفیف" />

            </div>

        </main>
    );
}

export default Box;