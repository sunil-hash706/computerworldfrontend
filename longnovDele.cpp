#include <iostream>

using namespace std;

int main()
{
    int t, x, y;
    cin >> t;
    int *A = new int[t];
    for (int i = 0; i < t; i++)
    {
        cin >> x >> y;
        if((x+y*2)%2==0){
            A[i]=1;
        }
        else{
            A[i]=0;
        }
    }
    for (int i = 0; i < t; i++)
    {
        if (A[i] == 1)
        {
            cout << "YES" << endl;
        }
        if (A[i] == 0)
        {
            cout << "NO" << endl;
        }
        
    }

    return 0;
}