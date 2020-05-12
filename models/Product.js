var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */

var Product = new keystone.List('Product', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
});

Product.add({
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
    author: { type: Types.Relationship, ref: 'User', index: true },
    publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
    image: { type: Types.CloudinaryImage },
    description: {
        brief: { type: Types.Html, wysiwyg: true, height: 150 },
    },
    sizes: { type: String, index: true },
    colors: { type: String, index: true },
    price: { type: Number, index: true }
});

Product.schema.virtual('content.full').get(function() {
    return this.description.extended || this.sizes;
});

Product.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Product.register();