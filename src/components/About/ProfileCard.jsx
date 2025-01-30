import ProfileImage from './ProfileImage';

function ProfileCard({ images }) {
  return (
    <div className="relative group h-[300px] md:h-[400px] [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <ProfileImage src={images.front} alt="Profile Front" />
        <ProfileImage src={images.back} alt="Profile Back" isBack />
      </div>
    </div>
  );
}

export default ProfileCard; 