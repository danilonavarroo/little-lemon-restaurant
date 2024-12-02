function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo Section */}
                <div className="footer-logo">
                    <img
                        src="path-to-your-logo.png" // Replace with your actual logo path
                        alt="Logo"
                        className="logo-image"
                    />
                </div>

                {/* Doormat Navigation */}
                <div className="footer-section">
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="footer-section">
                    <h4>Contact</h4>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="footer-section">
                    <h4>Social Media Links</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
