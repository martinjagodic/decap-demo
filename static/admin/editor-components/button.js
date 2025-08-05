/* global CMS */

CMS.registerEditorComponent({
  id: 'button',
  label: 'Button',
  fields: [
    { name: 'text', widget: 'string' },
    { name: 'href', label: 'Link', widget: 'string' },
  ],

  // Hugo shortcode for button
  pattern: /^{{< button href="(.*)" >}}(.*){{< \/button >}}/,
  fromBlock (match) {
    return {
      href: match[1] || '',
      text: match[2] || '',
    }
  },

  toBlock (obj) {
    return `{{< button href="${obj.href || ''}" >}}${obj.text || ''}{{< /button >}}`
  },

  toPreview (obj) {
    return `<a class="button" href="${obj.href || ''}">${obj.text || ''}</a>`
  },
})
