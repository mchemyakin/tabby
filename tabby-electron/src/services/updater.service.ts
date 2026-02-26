import { Injectable } from '@angular/core'

import { Logger, LogService, ConfigService, UpdaterService, PlatformService, TranslateService } from 'tabby-core'

@Injectable()
export class ElectronUpdaterService extends UpdaterService {
    private logger: Logger

    constructor (
        log: LogService,
        _config: ConfigService,
        private translate: TranslateService,
        private platform: PlatformService,
    ) {
        super()
        this.logger = log.create('updater')
        this.logger.info('Updater disabled in privacy mode')
    }

    async check (): Promise<boolean> {
        return false
    }

    async update (): Promise<void> {
        await this.platform.showMessageBox({
            type: 'warning',
            message: this.translate.instant('Automatic update checks are disabled in this build.'),
            buttons: [this.translate.instant('OK')],
            defaultId: 0,
            cancelId: 0,
        })
    }
}
