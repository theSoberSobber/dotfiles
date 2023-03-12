#include <bits/stdc++.h>
#ifndef ONLINE_JUDGE
#include "debug.h"
#pragma GCC optimize("O3,unroll-loops")
#pragma GCC target("avx2,bmi,bmi2,lzcnt,popcnt")
#else
#define dbg(x...) "11-111"
#endif

using namespace std;

#define ll long long
#define int long long // because mai bevakoof hu
#define spr(x) for(int i=1; i<=n; i++) cout<<x[i]<<' ';
#define sz(x) (ll)x.size()

// ll inv(ll i) {if (i == 1) return 1; return (mod - ((mod / i) * inv(mod % i)) % mod) % mod;}
// ll mod_mul(ll a, ll b) {a = a % mod; b = b % mod; return (((a * b) % mod) + mod) % mod;}
// ll mod_add(ll a, ll b) {a = a % mod; b = b % mod; return (((a + b) % mod) + mod) % mod;}
// ll gcd(ll a, ll b) { if (b == 0) return a; return gcd(b, a % b);}
// ll ceil_div(ll a, ll b) {return a % b == 0 ? a / b : a / b + 1;}
// ll pwr(ll a, ll b) {a %= mod; ll res = 1; while (b > 0) {if (b & 1) res = res * a % mod; a = a * a % mod; b >>= 1;} return res;}

constexpr ll Inf = 4e18;
constexpr int mod = 1e9+7;
// constexpr int mod = 998244353;
constexpr int maxn = 1e6+5;

int fac[maxn];

void pre_process(){
    fac[0] = fac[1] = 1;
    for (int i=2; i<maxn; i++) fac[i] = (fac[i-1] * i)%mod;
}

void solve(){
    int n;  cin >> n;
    vector<int> a(n), ans(n);
    for(auto &i: a) cin >> i;
 
    for(int i = 0 ; i < n ; i++) {
        if(i)   ans[i] = max(ans[i], ans[i - 1]);
        cout << i + 1 - ans[i] << " ";
        if(i + a[i] < n)
            ans[i + a[i]] = i + 1;
    }
    cout << '\n';

}
int32_t main(){
    ios_base::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);
    pre_process();
    int t; cin>>t;
    while(t--) solve();
}