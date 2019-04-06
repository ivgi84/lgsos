console.log('server initialization start');
import app from './lgos.init';

const PORT = app.get('port');

app.listen(PORT, () => {
    console.log('Lg Overlay server us up and running on port ' + PORT);
});

