import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useDeliveryStore } from './store'
describe('vocational skills partnership store', () => { beforeEach(() => setActivePinia(createPinia())); it('loads partnership cases from the Java API', async () => { vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => [{ id: 1, title: 'Advanced manufacturing training centre', owner: 'European VET Business Partnership', status: 'Approved', priority: 'Low' }] })); const store = useDeliveryStore(); await store.load(); expect(store.offers).toHaveLength(1); expect(store.approvedShare).toBe(100) }) })
