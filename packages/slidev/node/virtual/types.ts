import type { Awaitable } from '@nholuongut/utils'
import type { ResolvedSlidevOptions } from '@slidev/types'
import type { PluginContext } from 'rollup'

export interface VirtualModuleTemplate {
  id: string
  getContent: (this: PluginContext, options: ResolvedSlidevOptions) => Awaitable<string>
}
