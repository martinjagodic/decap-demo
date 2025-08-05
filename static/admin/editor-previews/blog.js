/* global CMS, createClass, h */

CMS.registerPreviewStyle('/style-parsed.css')

const PostPreview = createClass({
  render: function () {
    const { entry, widgetFor } = this.props
    const { title, description } = entry.getIn(['data']).toJS()

    return h('div', { className: 'post-preview' },
      h('h1', {}, title),
      h('p', { className: 'description' }, description),
      h('div', {}, widgetFor('body'))
    )
  }
})

CMS.registerPreviewTemplate('blog', PostPreview)
