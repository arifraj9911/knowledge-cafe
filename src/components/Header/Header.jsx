import profile from '../../assets/Images/profile.png';

const Header = () => {
    return (
        <header className='md:flex md:justify-between md:items-center border-b-2 pb-4'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;