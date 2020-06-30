const funcAc = require('./account');

test('Load the audio file ', () => {
    expect.assertions(1);
    return funcAc.audioF().then(data => {
        expect(data.speech_to_text).toEqual('M\u00e2ine mergem la mare');
    })
});

test('Inner html must be null', () => {
    expect(funcAc.clearDiv()).toBeNull();
}); 