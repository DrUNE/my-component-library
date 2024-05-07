import styles from './styles.module.css';

/**
 * Просто кнопка
 * @param props параметры кнопки
 * @returns
 */
export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  return <button className={`${className} ${styles.button}`} {...restProps} />;
}

Button.displayName = 'Button';
