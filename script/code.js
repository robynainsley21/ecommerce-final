/**date on footer */
document.querySelector('[current-year]').textContent += new Date().getUTCFullYear()

document.getElementById('contact-details').innerHTML = `
    <div class="row">
        <div class="col contact-first-col">
            <img src="https://robynainsley21.github.io/images/ecommerce-skincare/ecommerce-logo__1_-removebg-preview.png" alt="contact-details-logo"/>
            <h6 class="m-3">Follow us</h6>
            <div class="contact-details-icons">
                <i class="fa-brands fa-facebook fa-lg m-2"></i>
                <i class="fa-brands fa-instagram fa-lg m-2"></i>
                <i class="fa-brands fa-twitter fa-lg m-2"></i>
            </div>
        </div>
        <div class="col contact-second-col">
            <h5>About Us</h5>
            <a href="/html/about.html"><p>Learn about our company's vision</p></a>
        </div>
        <div class="col contact-third-col">
            <h5>Products</h5>
            <a href="/html/product.html">
                <p>Moisturising</p>
                <p>Acne</p>
                <p>Hydrating</p>
            </a>
        </div>
        <div class="col">
            <h5>Contact Us</h5>
            <a href="/html/contact.html"><p>Get in touch</p></a>
        </div>
    </div>

`