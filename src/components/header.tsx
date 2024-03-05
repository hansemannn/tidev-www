/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className='relative w-full px-8 text-gray-700 bg-white dark:bg-neutral-900 body-font'>
            <div className='container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl'>
                <div className='relative flex flex-col md:flex-row'>
                    <Link href='/' className='flex items-center mb-5 font-medium text-white lg:w-auto justify-center md:mb-0'>
                        <Image src='/tidev-logo.png' className='logo' alt='tiDev Logo' width={115} height={50} />
                    </Link>
                    <nav className='flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200'>
                        <Link href='/blog' className='mr-5 font-medium leading-6 text-gray-600 dark:text-gray-200 hover:text-blue-500'>Blog</Link>
                        <Link href='/donate' className='mr-5 font-medium leading-6 text-gray-600 dark:text-gray-200 hover:text-blue-500'>Donate</Link>
                        <Link href='/contribute' className='mr-5 font-medium leading-6 text-gray-600 dark:text-gray-200 hover:text-blue-500'>Contribute</Link>
                    </nav>
                </div>

                <div className='relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end'>
                    <Link href='https://github.com/tidev' target='_blank' className='text-gray-400 dark:text-gray-200 hover:text-blue-500'>
                        <span className='sr-only'>GitHub</span>
                        <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 24 24'>
                            <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'></path>
                        </svg>
                    </Link>
                    <Link href='https://slack.tidev.io' target='_blank' className='text-gray-400 dark:text-gray-200 hover:text-blue-500'>
                        <span className='sr-only'>Slack</span>
                        <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 448 512'>
                            <path d='M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z' />
                        </svg>
                    </Link>
                    <Link href='https://twitter.com/tidevio' target='_blank' className='text-gray-400 dark:text-gray-200 hover:text-blue-500'>
                        <span className='sr-only'>Twitter</span>
                        <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 24 24'>
                            <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'></path>
                        </svg>
                    </Link>
                    <Link href='/feed.xml' target='_blank' className='text-gray-400 dark:text-gray-200 hover:text-blue-500'>
                        <span className='sr-only'>RSS</span>
                        <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox="0 0 256 256">
                            <path d="M220 200a12 12 0 0 1-24 0c0-77.2-62.8-140-140-140a12 12 0 0 1 0-24c90.43 0 164 73.57 164 164ZM56 108a12 12 0 0 0 0 24a68.07 68.07 0 0 1 68 68a12 12 0 0 0 24 0a92.1 92.1 0 0 0-92-92Zm4 72a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
}
