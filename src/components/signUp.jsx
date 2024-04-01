import checkIcon from '../assets/images/icon-success.svg'
import EmailForm from './emailForm'

export default function SignUp() {
    return (
        <div className='bg-white h-full w-full lg:rounded-l-xl flex flex-col p-8 justify-between'>
            <div className='flex flex-col'>
                <h1 className="font-bold text-5xl">Stay updated!</h1>
                <p className='font-light mt-6'>Join 60,000+ product managers receiving monthly updates on:</p>
                <div className='flex items-center space-x-4 mt-6'>
                    <img className='w-4 h-4' src={checkIcon} alt="checkIncon" />
                    <p>Product discovery and building what metters</p>
                </div>
                <div className='flex items-center space-x-4 mt-4'>
                    <img className='w-4 h-4' src={checkIcon} alt="checkIncon" />
                    <p>Measuring to ensure updates are a success</p>
                </div>
                <div className='flex items-center space-x-4 mt-4'>
                    <img className='w-4 h-4' src={checkIcon} alt="checkIncon" />
                    <p>And much more!</p>
                </div>
            </div>
            <EmailForm/>
        </div>
    )
}
