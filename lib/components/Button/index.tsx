import styles from './styles.module.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**  Задает размеры компонента */
  'data-componet-size'?: 's' | 'm' | 'l';
};
/**
 * Просто кнопка
 * @param props параметры кнопки
 * @returns
 */
export function Button(props: Props) {
  const { className, ...restProps } = props;
  return <button className={`${className} ${styles.button}`} {...restProps} />;
}

Button.displayName = 'Button';
