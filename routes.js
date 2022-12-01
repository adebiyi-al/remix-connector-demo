import { Router } from '@edgio/core/router'

export default new Router()
  .noIndexPermalink()
  .fallback(({ renderWithApp }) => renderWithApp())
