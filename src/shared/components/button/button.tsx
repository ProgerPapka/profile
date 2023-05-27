import {ComponentChildren, ComponentProps} from 'preact';
import clsx from 'clsx';
import styles from './button.module.scss';
import {DefaultHandlers} from '../../types/event-handlers';

export type ButtonApperence = 'primary' | 'secondary' | 'outline' | 'flat';

export type ButtonProps = DefaultHandlers & {
  readonly name?: string;
  readonly children?: ComponentChildren;
  readonly disabled?: boolean;
  readonly rounded?: boolean;
  readonly loading?: boolean;
  readonly apperence?: ButtonApperence;
};

export function Button(props: ButtonProps) {
  const {children, name, disabled, apperence = 'primary', onClick} = props;
  const css = clsx(styles.btn, {
    [styles.btnDisabled]: disabled,
    [styles.btnPrimary]: apperence === 'primary',
  });
  return (
    <button class={css} disabled={disabled} onClick={onClick}>
      {children || name}
    </button>
  );
}
