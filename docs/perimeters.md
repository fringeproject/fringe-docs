# Perimeters

A Perimeter is an environment where you can add data and create your own discovery
rules. You can see a perimeter as a new worksheet where you manage your data.
With a [runner](./runner.md) you can find new data and do some
active and passive scans.

See a perimeter as `hostname` or `IP` you have to audit or even bug bounty program.


## Create a new perimeter

In this paragraph we will create a new perimeter for a bug-bounty program. Let's
call it `First perimeter` and add a description such as `Let's try FringeProject`.
If you have already so data, you can add it.

Be careful, we parse only `hostname` and `IP` as data. Moreover, each data must be
separated by a new line. Then click on "Create" and to create your first perimeter!


## Rules

On the perimeter dashboard, you should see that there is more data that you have
previously added. Why? It's because we have created so custom rules for you. For
example, we try to resolve every hostname to get IP addresses and we get some
informations on IP too.

### Defaults rules

Here are the default rules:

- `Hostname Resolution`: Resolve a hostname
- `IP info`: retrieve IP informations


### Create a New Rule

You can create a new rule on you perimeter. We provide various modules that perform
simple tasks based on some `perimeter events`.

Let's create a rule that scan every new IP:

- `rule name`: The name you want to give to your rule, `Auto TCP scan`
- `rule description` (optional): A description for your rule
- `module`: Select the module to execute, here `nmap`
- `Perimeter event`: Select on what event the rule is triggered, here `New data`

Note that IP that already exists are not scan because the rule applies only to new
IP. If you want to apply the rule to new and old IP, then you have to check the
case `Apply scan to data already found`. Doing this we will add a new job for data
that already exist.

Now that you have your new rule, there will be a new job every time you add a new IP
or the runner finds a new one.


## Pending Jobs

You can see the backlog of the job for your perimeter.
