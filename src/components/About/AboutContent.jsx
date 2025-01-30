function AboutContent({ paragraphs }) {
  return (
    <div className="space-y-6">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-gray-600 leading-relaxed text-lg">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default AboutContent; 