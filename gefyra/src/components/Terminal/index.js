import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Terminal({src, alt}) {
    return (
        <section>
            <div class={styles.menu}>
                <div class={clsx(styles.buttons, styles.close)}></div>
                <div class={clsx(styles.buttons, styles.minimize)}></div>
                <div class={clsx(styles.buttons, styles.zoom)}></div>
            </div>
            <div class={styles.screen}>
                <img loading="lazy" alt={alt} src={src}/>
            </div>
        </section>
    );
}
