#include <bits/stdc++.h>

using i64 = long long;

void solve() {
    int n;
    std::cin >> n;
    
    std::vector<int> a(n);
    for (int i = 0, k = 0; i < n; i++) {
        std::cin >> a[i];
        while (k <= i && a[i - k] >= k + 1) {
            k += 1;
        }
        std::cout << k << " \n"[i==n-1];
    }

    vector<bool> Prime;
    vector<int> spf;
    void sieve(int s = maxn) {
        Prime.resize(s + 1, 1);
        spf.resize(s + 1, s + 1);
        for(int i = 2 ; i <= s ; i++)   if(Prime[i]) {
            spf[i] = min(spf[i], i);
            for(int j = i ; (ll)j * i <= s ; j++)
                Prime[j * i] = 0, spf[j * i] = min(i, spf[j * i]);
        }
    }
    
}

int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    
    int t;
    std::cin >> t;
    
    while (t--) {
        solve();
    }
    
    return 0;
}