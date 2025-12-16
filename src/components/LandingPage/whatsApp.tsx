import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923168021003?text=hey!%20let%20me%20know%20more%20about%20this."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-[#25D366]
        text-white shadow-lg
        transition-all duration-300
        hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)]
        md:h-16 md:w-16
      "
    >
      <FaWhatsapp className="h-8 w-8 md:h-9 md:w-9" />
    </a>
  )
}
