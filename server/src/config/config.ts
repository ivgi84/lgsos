export abstract class LgosConfig {
    public static get dbConfig() {
     return {
         dbUser: 'ivgi',
         dbPassword: 'mLab-lgos-2019!$',
         mLabDbConnectionString: `mongodb://${LgosConfig.dbConfig.dbUser}:${LgosConfig.dbConfig.dbPassword}@ds213645.mlab.com:13645/lgos`, // https://mlab.com/
         localDbLocal: 'mongodb://localhost/lgOs'
     }
    }
    public static get config() {
        return {
            defaultPort: '4000',
            distanationFolder: 'assets',
            db: LgosConfig.dbConfig
        }
    }
}
