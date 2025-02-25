import {default as Logo} from '@/_assets/img/queen-bee.jpg';

export const SiteHeader = () => {
    return (
        <>
            <header className='align-middle'>
                <h1 className='flex flex-row text-4xl font-bold text-violet-600 text-shadow text-shadow-black'>
                    <img
                        src={Logo}
                        className="flex flex-col justify-center flex-grow-0 w-1/12"
                        alt={'Logo image.'}
                    />
                    <span
                        className='flex flex-col justify-center flex-grow-0 w-11/12 '>The Queen Bee&apos;s Domain</span>
                </h1>
            </header>
        </>
    );
};
