function ProfileImage({ src, alt, isBack = false }) {
  return (
    <div className={`absolute inset-0 ${isBack ? '[transform:rotateY(180deg)]' : ''} ${isBack ? '[backface-visibility:hidden]' : ''}`}>
      <div className={`absolute inset-0 bg-gradient-to-r ${
        isBack ? 'from-purple-500/20 to-blue-500/20' : 'from-blue-500/20 to-purple-500/20'
      } rounded-lg blur-lg`}></div>
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 rounded-lg shadow-xl w-full h-full object-contain ${
          !isBack ? '[backface-visibility:hidden]' : ''
        }`}
      />
    </div>
  );
}

export default ProfileImage; 