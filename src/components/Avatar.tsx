import avatarImg from '../assets/photoProfile.jpg';

const Avatar = () => {
    return (
        <div className='w-28 h-28'>
            <img src={avatarImg} alt='ilham rangga kurniawan' className='rounded-xl'/>
        </div>
    )
}

export default Avatar