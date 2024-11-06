import 'notistack';

declare module 'notistack' {
  interface OptionsObject {
    variant?: 'success' | 'error' | 'info' | 'warning';
  }
}
