export default function SRLChecker(val) {
    let SRL = { key: '', value: '' };
    if (val <= 3) {
        SRL.key = 'L';
        SRL.value = 'Low Slef-regulated Learner'
    } else if (val > 3 && val < 6) {
        SRL.value = 'Average Self-Regulated Learner';
        SRL.key = 'A';
    } else if (val >= 6) {
        SRL.value = 'High Self-Regulated Learner';
        SRL.key = 'H';
    }
    return SRL;
}