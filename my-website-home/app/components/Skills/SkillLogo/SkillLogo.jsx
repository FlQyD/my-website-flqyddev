import Image from 'next/image';

const SkillLogo = ({ skill }) => {
    return <Image src={`/imgs/${skill}.webp`} alt={`${skill} logo`} width={40} height={40} />;
};

export default SkillLogo;
