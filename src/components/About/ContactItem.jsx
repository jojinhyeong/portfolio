function ContactItem({ icon, href, text, isLink = true }) {
  const content = isLink ? (
    <a href={href} className="hover:text-blue-500 transition-colors">
      {text}
    </a>
  ) : text;

  return (
    <p className="flex items-center text-gray-600">
      <span className="text-blue-500 mr-3">{icon}</span>
      {content}
    </p>
  );
}

export default ContactItem; 