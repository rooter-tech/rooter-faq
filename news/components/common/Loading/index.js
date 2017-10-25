import { h } from 'preact';
import styles from './styles.css';

const Loading = () => (
    <div class={styles.loadingRoot}>
        <div class="spinner">
            <div class="double-bounce1" />
            <div class="double-bounce2" />
        </div>
    </div>
);

export default Loading;
