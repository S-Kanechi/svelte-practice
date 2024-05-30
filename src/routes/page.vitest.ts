import {describe, expect, it} from 'vitest'
import {render} from '@testing-library/svelte'
import TopPage from './+page.svelte'

describe('Top page', () => {
    it('トップページが開く', () => {
        const {getByText} = render(TopPage)
        expect(getByText('写真管理'));
    })
})