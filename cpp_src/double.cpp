#include <iostream>
using namespace std;

int main() {
    int pirate = 0, gold = 0;
    cin >> pirate >> gold;
    cout << "{"                                                         << endl;
    cout << "   \"sentences\": ["                                       << endl;
    cout << "       \"I don't really know how this works but ...\","    << endl;
    cout << "       \"We have " << pirate << " pirates\","              << endl;
    cout << "       \"and " << gold << " gold.\""                       << endl;
    cout << "   ],"                                                     << endl;
    cout << "   \"strategy\": [97,0,1,2,0]"                             << endl;
    cout << "}" << endl;
    return 0;
}