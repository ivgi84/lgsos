console.log('server initialization start');
import app  from './lgos.init'; 
import { LgosConfig } from './config/config';

const PORT = LgosConfig.config.defaultPort;

app.listen(PORT, () => {
    console.log('Lg Overlay server us up and running on port ' + PORT);
});

