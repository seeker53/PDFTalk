import styles from '@/styles/loading-dots.module.css';

interface LoadingDotsProps {
  color?: string; // Make color optional
  style?: 'small' | 'large'; // Define allowed styles
}

const LoadingDots: React.FC<LoadingDotsProps> = ({
  color = '#000',
  style = 'small',
}) => {
  return (
    <span
      className={style === 'small' ? styles.loading2 : styles.loading}
      aria-hidden="true" // Accessibility enhancement
    >
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};

export default LoadingDots;
