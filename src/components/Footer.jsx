import { Heart } from "lucide-react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer text-center py-3">

      <h4 className="serif mb-2">
        Vamsi Krishna & Jayasri
      </h4>

      <p className="mb-3">
        May 9, 2026
      </p>

      {/* Made with ❤️ */}
      <div className="d-flex align-items-center justify-content-center gap-2 footer-made">
        <span className="small  text-uppercase">
          Made with
        </span>
        <Heart size={18} className="footer-heart" />
      </div>

    </footer>
  );
}