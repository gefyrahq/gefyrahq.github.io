import React from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function LanguageGrid({ select = "all" }) {

    const platformSelected = ((select == "all") || (select == "platforms") ? true : false);
    const languagesSelected = ((select == "all") || (select == "languages") ? true : false);


    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            </Head>
            <figure className={clsx(styles.sectionFigure)}>

                {platformSelected &&
                    <>
                        <Link className={clsx(styles.zoom)} href='#/container-based-development/platforms/on-macos'><i className='devicon-apple-original'></i></Link>
                        <Link className={clsx(styles.zoom)} href='#/container-based-development/platforms/on-windows'><i className='devicon-windows8-original'></i></Link>
                        <Link className={clsx(styles.zoom)} href='#/container-based-development/platforms/on-linux'><i className='devicon-linux-plain'></i></Link>
                        <br />
                    </>
                }

                {languagesSelected &&
                    <>
                        <Link className={clsx(styles.zoom)} href="#/container-based-development/programming/with-go"><i className="devicon-go-original-wordmark"></i></Link>
                        <Link className={clsx(styles.zoom)} href="#/container-based-development/programming/with-python#django"><i className="devicon-django-plain"></i></Link>
                        <Link className={clsx(styles.zoom)} href="#/container-based-development/programming/with-go#hugo"><i className="devicon-hugo-plain"></i></Link>
                        <Link className={clsx(styles.zoom)} href="#/container-based-development/programming/with-rust"><i className="devicon-rust-plain"></i></Link>
                        <Link className={clsx(styles.zoom)} href="#/container-based-development/programming/with-python"><i className="devicon-python-plain"></i></Link>
                        <br />
                        <Link className={clsx(styles.zoom)} href="#/container-based-development/programming/with-java"><i className="devicon-java-plain"></i></Link>
                        <Link className={clsx(styles.zoom)} href="#/container-based-development/programming/with-javascript"><i className="devicon-typescript-plain"></i></Link>
                        <Link className={clsx(styles.zoom)} href="#/container-based-development/programming/with-javascript"><i className="devicon-express-original"></i></Link>
                        <Link className={clsx(styles.zoom)} href="#/container-based-development/programming/with-javascript"><i className="devicon-angularjs-plain"></i></Link>
                        <Link className={clsx(styles.zoom)} href="#/container-based-development/programming/with-javascript"><i className="devicon-vuejs-plain"></i></Link>
                        <br />
                        <Link className={clsx(styles.zoom)} href="#/container-based-development/programming/with-python#fastapi"><i className="devicon-fastapi-plain"></i></Link>
                        <Link className={clsx(styles.zoom)} href="#/container-based-development/programming/with-php"><i className="devicon-laravel-plain"></i></Link>
                    </>
                }
            </figure>
        </div>
    );
}