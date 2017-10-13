import { moduleForModel, test } from 'ember-qunit';

moduleForModel('cluster-counter', 'Unit | Serializer | cluster counter', {
  // Specify the other units that are required for this test.
  needs: ['serializer:cluster-counter']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
