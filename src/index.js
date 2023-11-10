import './css/bootstrap-reboot.min.css';
import './css/fonts.css';
import './main.scss';
if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./index.html', function() {
      console.log('Accepting the updated HTML module!');
    });
  }
  