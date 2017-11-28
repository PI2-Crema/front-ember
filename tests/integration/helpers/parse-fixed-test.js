
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('parse-fixed', 'helper:parse-fixed', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{parse-fixed inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

