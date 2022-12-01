// This file was automatically added by edgio init.
// You should commit this file to source control.
import { Router } from '@edgio/core'
import remixRoutes from '../../RemixRoutes'

export default new Router()
	// Prevent search engines from indexing permalink URLs
	.noIndexPermalink()
	.use(remixRoutes)
